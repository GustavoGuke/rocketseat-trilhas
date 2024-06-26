import { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View, BackHandler } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles';

import { QUIZ } from '../../data/quiz';
import { historyAdd } from '../../storage/quizHistoryStorage';

import { Loading } from '../../components/Loading';
import { Question } from '../../components/Question';
import { QuizHeader } from '../../components/QuizHeader';
import { ConfirmButton } from '../../components/ConfirmButton';
import { OutlineButton } from '../../components/OutlineButton';
import Animated, { interpolate, Easing, interpolateColor, useAnimatedStyle, useSharedValue, withSequence, withTiming, useAnimatedScrollHandler, Extrapolation, runOnJS } from 'react-native-reanimated';
import { ProgressBar } from '../../components/ProgressBar';
import { THEME } from '../../styles/theme';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { OverlayFeedback } from '../../components/OverlayFeedback';

import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';

interface Params {
  id: string;
}

type QuizProps = typeof QUIZ[0];

export function Quiz() {
  const [points, setPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quiz, setQuiz] = useState<QuizProps>({} as QuizProps);
  const [alternativeSelected, setAlternativeSelected] = useState<null | number>(null);
  const [statusReply, setStatusReply] = useState(0)

  const { navigate } = useNavigation();

  const route = useRoute();
  const { id } = route.params as Params;

  const sharedShake = useSharedValue(0);
  const sharedScrollY = useSharedValue(0);
  const sharedCardPosition = useSharedValue(0);

  async function playSound(isCorrect: boolean) {
    const file = isCorrect ? require('../../assets/correct.mp3') : require('../../assets/wrong.mp3')
    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true })

    await sound.setPositionAsync(0)
    await sound.playAsync()
  }


  function animatedShake() {
    sharedShake.value = withSequence(
      withTiming(3, { duration: 400, easing: Easing.bounce }),
      withTiming(0),
    )
  }

  const shakeStyleAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(sharedShake.value,
            [0, 0.5, 1, 1.5, 2, 2.5, 3],
            [0, -15, 0, 15, 0, -15, 0]),
        }
      ],
      backgroundColor: interpolateColor(
        sharedShake.value,
        [0, 0.5, 1, 1.5, 2, 2.5, 3],
        ['transparent', 'red', 'transparent', 'red', 'transparent', 'red', 'transparent']
      )
    }
  })

  function handleSkipConfirm() {
    Alert.alert('Pular', 'Deseja realmente pular a questão?', [
      { text: 'Sim', onPress: () => handleNextQuestion() },
      { text: 'Não', onPress: () => { } }
    ]);
  }

  async function handleFinished() {
    await historyAdd({
      id: new Date().getTime().toString(),
      title: quiz.title,
      level: quiz.level,
      points,
      questions: quiz.questions.length
    });

    navigate('finish', {
      points: String(points),
      total: String(quiz.questions.length),
    });
  }

  function handleNextQuestion() {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prevState => prevState + 1)
    } else {
      handleFinished();
    }
  }

  async function handleConfirm() {
    if (alternativeSelected === null) {
      return handleSkipConfirm();
    }

    if (quiz.questions[currentQuestion].correct === alternativeSelected) {
      await playSound(true)
      setStatusReply(1)
      setPoints(prevState => prevState + 1);

    } else {
      await playSound(false)
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
      setStatusReply(2)
      animatedShake();
    }

    setAlternativeSelected(null);
  }

  function handleStop() {
    Alert.alert('Parar', 'Deseja parar agora?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        style: 'destructive',
        onPress: () => navigate('home')
      },
    ]);

    return true;
  }


  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      sharedScrollY.value = event.contentOffset.y
    }
  })

  const fixedProgressBarStyles = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      zIndex: 1,
      marginBottom: 10,
      paddingTop: 100,
      backgroundColor: THEME.COLORS.GREY_500,
      width: '110%',
      left: '-5%',
      opacity: interpolate(sharedScrollY.value, [50, 80], [0, 1], Extrapolation.CLAMP),
      transform: [
        { translateY: interpolate(sharedScrollY.value, [50, 100], [-40, 0], Extrapolation.CLAMP) }
      ]
    }
  })


  const headerStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(sharedScrollY.value, [40, 80], [1, 0], Extrapolation.CLAMP),
    }
  })

  const onPain = Gesture
    .Pan()
    .activateAfterLongPress(200)
    .onUpdate((event) => {
      const moveToLeft = event.translationX < 0

      if (moveToLeft) {

        sharedCardPosition.value = event.translationX
      }
    })
    .onEnd((event) => {
      if (event.translationX < -200) {
        runOnJS(handleSkipConfirm)()
      }
      sharedCardPosition.value = withTiming(0)
    })

  const dragStyles = useAnimatedStyle(() => {
    const rotateZ = sharedCardPosition.value / 10 // rotação 10
    return {
      transform: [
        { translateX: sharedCardPosition.value },
        { rotateZ: `${rotateZ}deg` }

      ]
    }
  })


  useEffect(() => {
    const quizSelected = QUIZ.filter(item => item.id === id)[0];
    setQuiz(quizSelected);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (quiz.questions) {
      handleNextQuestion();
    }
  }, [points]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", handleStop)
    console.log("passei aqui")
    return () =>  backHandler.remove()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <OverlayFeedback status={statusReply} />
      <Animated.View style={fixedProgressBarStyles}>
        <Text style={styles.title}>
          {quiz.title}
        </Text>

        <ProgressBar
          total={quiz.questions.length}
          current={currentQuestion + 1}
        />
      </Animated.View>

      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.question}
      >
        <Animated.View style={headerStyles}>
          <QuizHeader
            title={quiz.title}
            currentQuestion={currentQuestion + 1}
            totalOfQuestions={quiz.questions.length}
          />
        </Animated.View>

        <GestureDetector gesture={onPain}>
          <Animated.View style={[shakeStyleAnimated, dragStyles]}>
            <Question
              key={quiz.questions[currentQuestion].title}
              question={quiz.questions[currentQuestion]}
              alternativeSelected={alternativeSelected}
              setAlternativeSelected={setAlternativeSelected}
            />
          </Animated.View>
        </GestureDetector>

        <View style={styles.footer}>
          <OutlineButton title="Parar" onPress={handleStop} />
          <ConfirmButton onPress={handleConfirm} />
        </View>
      </Animated.ScrollView>
    </View >
  );
}