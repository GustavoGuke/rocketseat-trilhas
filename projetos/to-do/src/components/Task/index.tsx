import { ButtonIcon } from "../ButtonIcon";
import { Container, TextTask } from "./style";

type Props = {
    task: string
    checked?: boolean
    $checkedStyle?: string
    onChecked: () => void
    onRemove: () => void
}

export function Task({ task, checked = false, onChecked, onRemove }: Props) {
    return (
        <Container>
            {!checked ?
                <ButtonIcon
                    onPress={onChecked}
                    icon="panorama-fish-eye" /> :
                <ButtonIcon
                    icon="check-circle-outline"
                    type="SECONDARY"
                />}
            <TextTask
                $checkedStyle={checked}
            >
                {task}

            </TextTask>
            <ButtonIcon
                icon='delete' 
                onPress={onRemove}
                />
        </Container>
    )
}