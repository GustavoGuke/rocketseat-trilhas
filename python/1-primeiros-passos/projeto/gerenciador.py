tarefas = []
def adicionar(tarefas, nome_tarefa):
    tarefa = {'nome': nome_tarefa,'concluida': False}
    tarefas.append(tarefa)
    print("Tarefa adicionada com sucesso: ", nome_tarefa)
    return
def listar(tarefas):
    for indice, tarefa in enumerate(tarefas, start=1):
        status = "Concluida" if tarefa['concluida'] else ""
        nome_tarefa = tarefa["nome"]
        print(f"{indice} - {nome_tarefa} - [{status}]")

def atualizar(tarefas, nome_tarefa):
    for tarefa in tarefas:
        if tarefa['nome'] == nome_tarefa:
            tarefa['concluida'] = True
            print("Tarefa concluida com sucesso: ", nome_tarefa)
            return
    print("Tarefa nao encontrada: ", nome_tarefa)
    return
    
while True:
    print("\nMenu\n1 - Adicionar\n2 - Listar\n3 - Atualizar\n4 - Completar tarefa \n5 - Excluir\n6 - Sair")
    opcao = int(input("Digite uma opcao: "))

    if opcao == 1:
        nome_tarefa = input("Digite o nome da tarefa: ")
        adicionar(tarefas, nome_tarefa)
    elif opcao == 2:
        listar(tarefas)
    elif opcao == 3:
        nome_tarefa = input("Digite o nome da tarefa: ")
        atualizar(tarefas, nome_tarefa)
    elif opcao == 4:
        print("Completar tarefa")
    elif opcao == 5:
        print("Excluir")
    elif opcao == 6:
        print("Sair")
        break