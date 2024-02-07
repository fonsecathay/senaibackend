nome = input ("Escreva seu nome:")
numeroChamada = input ("Número da chamada:")
nota1 = float(input ("Primeira nota:"))
nota2 = float(input ("Segunda nota:"))

media = (nota1 + nota2) / 2

if media >= 6.0:
    print (f'O aluno {nome} da chamada {numeroChamada}, sua média final é: {media}. Parabéns, você foi APROVADO!!')
else:
    print (f'O aluno {nome} da chamada {numeroChamada}, sua média final é: {media}. REPROVADO!!!')
