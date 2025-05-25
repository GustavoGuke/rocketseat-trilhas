# print("ola mundo")
"""
Comentarios de multiplas linhas
"""
print("ola mundo")

# bloco
idade = 18
#idade = int(input("Digite sua idade: "))

if idade >= 18:
    print("maior de idade")
else:
    print("menor de idade")


# while
contado = 0
while contado < 5:
    print(contado)
    contado += 1


# fnçoes
def soma(n1, n2):
    return n1 + n2

print(soma(10, 20))