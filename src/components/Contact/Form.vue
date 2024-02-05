<template>
    <div class="contact__form">
        <form @submit.prevent="onSubmit">
            <input type="text" class="form__input-text" placeholder="Digite seu nome..." v-model="v$.form.name.$model">
            <input type="text" class="form__input-text" placeholder="Digite seu telefone/whatsapp...">
            <input type="text" class="form__input-text" placeholder="Digite seu endereço de e-mail...">
            <input type="text" class="form__input-text" placeholder="Digite o assunto...">
            <textarea class="form__textarea" placeholder="Escreva sua mensagem..."></textarea>
            <div class="form__button-area">
                <button type="submit" class="button button--icon">Enviar<i class="fa-regular fa-paper-plane button__icon"></i></button>
            </div>
            <div v-for="(error, id) of v$.form.$errors" :key="id">
                {{ error.$message }}
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
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
    name: 'VueForm',
    setup() { 
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {
            form: {
                name: ''
            }
        }
    },
    validations() {
        return {
            form: {
                name: {
                    required
                }
            }
        }
    },
    methods: {
        onSubmit() {
            console.log(this.form);
        }
    }
};
</script>