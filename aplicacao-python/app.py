from datetime import datetime


def saudacao(nome: str) -> str:
    hora = datetime.now().hour
    if hora < 12:
        periodo = "Bom dia"
    elif hora < 18:
        periodo = "Boa tarde"
    else:
        periodo = "Boa noite"
    return f"{periodo}, {nome}!"


def main() -> None:
    print("=== Aplicação Python ===")
    print(saudacao("Vitor"))
    print(f"Executado em: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}")


if __name__ == "__main__":
    main()
