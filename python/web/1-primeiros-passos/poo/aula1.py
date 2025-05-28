class Pessoa:
    def __init__(self, nome, nasc):
        self.nome = nome
        self.nasc = nasc
        
    def saudacao(self):
        return f"ola bem vindo {self.nome}"

# obj
pessoa1 = Pessoa("Gustavo", "1994")
mensagem = pessoa1.saudacao()
print(pessoa1.nasc)
print(mensagem)