# Definindo uma classe base (superclasse)
class Animal:
    def falar (self):
        pass

#Criando classes derivadas (subclasses)
class Cachorro(Animal):
    def falar(self):
        return "Woof!"
        
class Gato(Animal):
    def falar(self):
        return "Miau!"
    
class Cavalo(Animal):
    def falar(self):
        return "iiiiirrí!"

#Utilizando polimorfismo
animais = [Cachorro(), Gato(), Cavalo()]

for animal in animais:
    print(f"{animal.__class__.__name__}: {animal.falar()}")