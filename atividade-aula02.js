

let temp = "";



    console.log("\n== 1 Tipos primitivos + typeof ==");
    let Var_Number = 128;
    let Var_String = "Isso é uma String";
    let Var_IsBoolean = true;
    let Var_Undefined = undefined;
    let Var_Null = null; // cuidado: typeof null é 'object' (um bug histórico)
    let Var_BigInt = 1234567890n;
    let Var_Symbol = Symbol("id");


    console.log(typeof Var_Number, Var_Number); // 'number' 128
    console.log(typeof Var_String, Var_String); // 'string' 'Isso é uma String'
    console.log(typeof Var_IsBoolean, Var_IsBoolean); // 'boolean' true
    console.log(typeof Var_Undefined, Var_Undefined); // 'undefined' undefined
    console.log(typeof Var_Null, Var_Null); // 'object' null  (observação: typeof null é 'object')
    console.log(typeof Var_BigInt, Var_BigInt); // 'bigint' 1234567890n
    console.log(typeof Var_Symbol, typeof Var_Symbol); // 'symbol' 'symbol' (mostrar typeof de typeof é string)


    


    console.log("\n== 2 BigInt e Symbol ==");
    let big1 = 9007199254740991n; // com sufixo n
    let big2 = BigInt("9007199254740992"); // com BigInt()
    console.log(big1, typeof big1); // 9007199254740991n 'bigint'
    console.log(big2, typeof big2); // 9007199254740992n 'bigint'

    let id1 = Symbol("id");
    let id2 = Symbol("id");
    console.log(id1 === id2); // false
    console.log(typeof id1); // 'symbol'

    

    console.log("\n== 3 Operadores matemáticos, lógicos e comparação ==");

    
    console.log(120 + 8); // 128
    console.log(10 * (5 + 3)); // 80
    console.log(true && false); // false
    console.log(!false || false); // true
    console.log(128 == "128"); // true  (== faz coerção)
    console.log(128 === "128"); // false (=== checa tipo também)
    console.log(5 > 3, 5 <= 5, 2 !== 3); // true true true
    console.log(0 == false); // true
    console.log(0 === false); // false

    

    console.log("\n== 4 Concatenação e conversão dinâmica ==");
    console.log(2 + "2"); // '22'
    console.log(2 + (+"2")); // 4
    console.log("3" + 4 + 5); // '345'  (+ vira concatenação quando há string à esquerda)


    console.log("\n== 5 Escopo léxico e blocos {} ==");

    {
        // bloco vazio apenas para demonstrar
    }
    console.log('Após um bloco vazio, o código continua...'); // 'Após um bloco vazio, o código continua...'

    {
        const innerConst = "sou interno";
        let innerLet = 42;
        console.log(innerConst, innerLet); // 'sou interno' 42
    }
  
    
    const outer = "sou externo";
    {
        console.log(outer); // 'sou externo'  (variável de fora acessível dentro)
    }

    if (true) {
        var leakedVar = "vazou";
    }
    console.log(leakedVar); // 'vazou' (var não tem escopo de bloco


    console.log("\n== 6 Shadowing com const ==");
    const bloco = "valor";
    if (true) {
        console.log(bloco); // 'valor' (mostra o const de fora)
        {
            const bloco = "outro valor";
            console.log(bloco); // 'outro valor' (shadowing dentro do bloco interno)
        }
        console.log(bloco); // 'valor' (o const de fora não foi alterado)
    }


    console.log("\n== 7 Imutabilidade ==");
    let s = "texto";
    s.toUpperCase();
    console.log(s); // 'texto' (string imutável, toUpperCase não reatribui)
    s = s.toUpperCase();
    console.log(s); // 'TEXTO' (após reatribuição)


    console.log("\n== 8 Assincronismo com setTimeout ==");
    console.log("entra na fila e roda depois do código atual"); // explicação

    console.log('A'); // 'A'
    setTimeout(() => console.log('B (timeout 0)'), 0); // será enfileirado
    console.log('C'); // 'C'

    //   console.log('\nExemplo com dois timeouts:');
    setTimeout(() => console.log('timeout 0'), 0); // geralmente roda antes do timeout 100
    setTimeout(() => console.log('timeout 100'), 100); // roda depois
    console.log('sync depois de agendar timeouts'); // 'sync depois de agendar timeouts'





    
