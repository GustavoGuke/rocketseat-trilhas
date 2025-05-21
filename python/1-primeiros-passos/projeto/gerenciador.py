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


def atualizar(tarefas, indice, novo_nome_tarefa):
    indice_correto = indice_tarefa - 1
    if indice_correto >= 0 and indice_correto < len(tarefas):
        tarefas[indice_correto]["nome"] = novo_nome_tarefa
        print(f"Tarefa:{indice} :  {novo_nome_tarefa} atualizada")
    else:
        print("indice não encontrado")


def completar_tarefa(tarefas, indice_tarefa):
    indice_correto = indice_tarefa - 1
    if indice_correto >= 0 and indice_correto < len(tarefas):
        tarefas[indice_correto]["concluida"] = True
        print(f"Tarefa:{indice_correto} :  {tarefas[indice_correto]["nome"]} atualizada")
    else:
        print("indice não encontrado")
    return
    

def deletar_tarefas_completadas(tarefas):
    for tarefa in tarefas:
        if tarefa["concluida"]:
            tarefas.remove(tarefa)
    print("tarefas deletadas")
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
        listar(tarefas)
        indice_tarefa = int(input("Digite o número da terefa: "))
        nova_tarefa = input("Digite o novo nome da terefa: ")
        atualizar(tarefas, indice_tarefa, nova_tarefa)
    elif opcao == 4:
        listar(tarefas)
        indice_tarefa = int(input("Digite o número da terefa: "))
        completar_tarefa(tarefas, indice_tarefa)
    elif opcao == 5:
        deletar_tarefas_completadas(tarefas)
        listar(tarefas)
    elif opcao == 6:
        print("Sair")
        break