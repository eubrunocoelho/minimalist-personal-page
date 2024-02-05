<template>
    <div class="contact__form">
        <form action="">
            <input type="text" class="form__input-text" placeholder="Digite seu nome...">
            <input type="text" class="form__input-text" placeholder="Digite seu telefone/whatsapp...">
            <input type="text" class="form__input-text" placeholder="Digite seu endereço de e-mail...">
            <input type="text" class="form__input-text" placeholder="Digite o assunto...">
            <textarea class="form__textarea" placeholder="Escreva sua mensagem..."></textarea>
            <div class="form__button-area">
                <button class="button button--icon">Enviar<i class="fa-regular fa-paper-plane button__icon"></i></button>
            </div>
        </form>
        <div class="form__alerts">
            <div class="alert">
                <p>Mensagem padrão.</p>
            </div>
            <div class="alert alert--danger">
                <p>Mensagem de erro.</p>
            </div>
            <div class="alert alert--success">
                <p>Mensagem de sucesso.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueForm'
};
</script>