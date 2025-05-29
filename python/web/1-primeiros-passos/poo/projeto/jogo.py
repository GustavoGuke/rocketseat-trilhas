# personagem 

# heroi

# inimigo

import random
class Personagem:
    def __init__(self, nome, vida, nivel):
        self.__nome = nome
        self.__vida = vida
        self.__nivel = nivel

    def get_nome(self):
        return self.__nome
    
    def get_vida(self):
        return self.__vida
    
    def get_nivel(self):
        return self.__nivel
    
    def receber_ataque(self,dano):
        self.__vida -= dano
        if self.__vida < 0:
            self.__vida = 0
    
    def exibir_detalhes(self):
        print(f"Nome: {self.__nome}")
        print(f"Vida: {self.__vida}")
        print(f"Nível: {self.__nivel}")

    def atacar(self, alvo):
        dano = random.randint(self.get_nivel() * 2, self.get_nivel() * 4)
        alvo.receber_ataque(dano)
        print(f"{self.get_nome()} atacou {alvo.get_nome()} com {dano} de dano!")
    

class Heroi(Personagem):
    def __init__(self, nome, vida, nivel, habilidade):
        super().__init__(nome, vida, nivel)
        self.__habilidade = habilidade

    def get_habilidade(self):
        return self.__habilidade
    
    def exibir_detalhes(self):
        super().exibir_detalhes()
        print(f"Habilidade: {self.__habilidade}")
    
    def atacar_especial(self, alvo):
        dano = random.randint(self.get_nivel() * 5, self.get_nivel() * 8)
        alvo.receber_ataque(dano)
        print(f"{self.get_nome()} atacou {alvo.get_nome()} com {dano} de dano!")
    

class Inimigo(Personagem):
    def __init__(self, nome, vida, nivel, tipo):
        super().__init__(nome, vida, nivel)
        self.__tipo = tipo

    def get_tipo(self):
        return self.__tipo
    
    def exibir_detalhes(self):
        super().exibir_detalhes()
        print(f"Tipo: {self.__tipo}")
    
    
    
class Jogo:
    def __init__(self):
        self.heroi = Heroi("Naruto", 80, 10, "Hassengan")
        self.inimigo = Inimigo("Sasuke", 80, 8, "genjutsu")
    
    def iniciar_jogo(self):
        while self.heroi.get_vida() > 0 and self.inimigo.get_vida() > 0:
            print("Detalhes do personagens:")
            print(self.heroi.exibir_detalhes())
            print(self.inimigo.exibir_detalhes())

            input("Pressione Enter para continuar...")

            escolha = input ("Escolha 1-ataque normal, 2-ataque especial: ")
            
            if escolha == "1":
                self.heroi.atacar(self.inimigo)
                self.inimigo.atacar(self.heroi)
            elif escolha == "2":
                self.heroi.atacar_especial(self.inimigo)
                self.inimigo.atacar(self.heroi)
            else:
                print("Escolha inválida. Tente novamente.")
        
        if self.heroi.get_vida() > 0:
            print("Parabéns, você venceu o jogo!")
        else:
            print("Que pena, você perdeu o jogo.")



jogo = Jogo()
jogo.iniciar_jogo()