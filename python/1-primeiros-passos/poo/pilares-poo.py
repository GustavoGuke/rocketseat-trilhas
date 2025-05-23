#herança

class Animal:
    def __init__(self, nome):
        self.nome = nome

    def andar(self):
        print("andando...")
    
    def emitir_som(self):
        pass

class Cachorro(Animal):
    def emitir_som(self):
        return "au au"
    

class Gato(Animal):
    def emitir_som(self):
        return "miau miau"
    

dog = Cachorro("blum")
cat= Gato("rex")

print(dog.emitir_som())

# Polimorfismo
animais = [dog, cat]
for animal in animais:
    print(f"{animal.nome} faz: {animal.emitir_som()}")


#Encapsulamento
print("\nExemplo de encapsulamento:")
class ContaBancaria:
  def __init__(self, saldo) -> None:
    self.__saldo = saldo # Atributo privado

  def depositar(self, valor):
    if valor > 0:
      self.__saldo += valor

  def sacar(self, valor):
    if valor > 0 and valor <= self.__saldo:
      self.__saldo -= valor

  def consultar_saldo(self):
    return self.__saldo
    
conta = ContaBancaria(saldo=1000)
print(f"Saldo da conta bancária: {conta.consultar_saldo()}")
conta.depositar(valor=500)
print(f"Saldo da conta bancária: {conta.consultar_saldo()}")
conta.depositar(valor=-500)
print(f"Saldo da conta bancária: {conta.consultar_saldo()}")
conta.sacar(valor=2000)
print(f"Saldo da conta bancária: {conta.consultar_saldo()}")

conta_do_zezinho = ContaBancaria(saldo=50)