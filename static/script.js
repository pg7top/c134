$(document).ready(function(){

    console.log('Ready')

    //  Busque a data atual e atualize-a no DOM
    var date = new Date()
    let display_date= "Data: " + date.toLocaleDateString('pt-BR', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'})

    //Carregue o DOM HTML
    $(document).ready(function(){
        $('#display_date').html(display_date)

    })
    



    // Escreva um evento, quando o botão Enviar for clicado
    $('').click(function(){

        //  Obtenha o valor do texto da área de texto usando o método 'val()'
        let text_value = $('').val()

        //  Converta-o em um objeto JS.
        //  Forneça uma "chave" aqui e escreva o mesmo no arquivo app.py também para extrair dados
        let input_text = {'' : text_value}
        console.log(input_text)

        //  requisição ajax
        $.ajax({
            type: 'POST',
            url: "/predict-emotion",
            data: JSON.stringify(input_data) ,
            dataType: "json",
            contentType: 'application/json',
            //  se tudo funcionar, execute esta função
            success: function (result) {
               
                // Resultado recebido do Flask ----->JavaScript
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url   
                // Exibir resultado usando JavaScript----->HTML
                $("#prediction").html(predicted_emotion)
                $("#prediction").css('display','block')
                $("#emo_img_url").attr('src',emo_url)
                $("#emo_img_url").css('display','block')          
             },
             error: function (result) {
                 alert(result.responseJSON.message)
                 
             }
        })


        //  limpando a caixa de texto após cada pressionamento de botão
        $('#text').val("")
    })
        
})