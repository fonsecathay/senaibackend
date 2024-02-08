while True:
    resposta = input("Deseja sair do programa (s/n)?")
    if resposta.lower() == "s":
        print("É uma pena que voçê queira sair, mas farei o possível para te fazer feliz")
        break
    elif resposta.lower() == "n":
        print("Aguardo a tua vontade...")
    else:
        print("Opção inválida, por favor escolha uma resposta válida")