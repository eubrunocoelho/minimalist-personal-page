<template>
    <div class="contact__form">
        <form @submit.prevent="onSubmit()">
            <input type="text" class="form__input-text" placeholder="Digite seu nome..." v-model.trim="form.name">
            <input type="text" class="form__input-text" placeholder="Digite seu telefone/whatsapp..." v-model.trim="form.whatsapp">
            <input type="text" class="form__input-text" placeholder="Digite seu endereço de e-mail..." v-model.trim="form.email">
            <input type="text" class="form__input-text" placeholder="Digite o assunto..." v-model.trim="form.subject">
            <textarea class="form__textarea" placeholder="Escreva sua mensagem..." v-model.trim="form.message"></textarea>
            <div class="form__button-area">
                <button type="submit" class="button button--icon">Enviar<i class="fa-regular fa-paper-plane button__icon"></i></button>
            </div>
        </form>
        <div class="form__alerts" v-if="(v$.form.$errors.length > 0)">
            <template v-for="(error, id) of v$.form.$errors" :key="id">
                <div class="alert alert--danger">
                    <p>{{ error.$message }}</p>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { helpers, required, minLength, maxLength, email } from '@vuelidate/validators';

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
                name: '',
                whatsapp: '',
                email: '',
                subject: '',
                message: ''
            }
        }
    },
    validations() {
        return {
            form: {
                name: { 
                    required: helpers.withMessage('O campo "nome" é obrigatório.', required),
                    minLength: helpers.withMessage(
                        ({ $params }) => `O campo "nome" deve conter pelo menos ${$params.min} caracteres.`, minLength(3)
                    ),
                    maxLength: helpers.withMessage(
                        ({ $params }) => `O campo "nome" deve conter no máximo ${$params.max} caracteres.`, maxLength(128)
                    )
                },
                whatsapp: {
                    required: helpers.withMessage('O campo "telefone" é obrigatório.', required)
                },
                email: { 
                    required: helpers.withMessage('O campo "e-mail" é obrigatório.', required),
                    email: helpers.withMessage('O campo "e-mail" está inválido.', email),
                    maxLength: helpers.withMessage(
                        ({ $params }) => `O campo "e-mail" deve conter no máximo ${$params.max} caracteres.`, maxLength(128)
                    )
                },
                subject: {
                    required: helpers.withMessage('O campo "assunto" é obrigatório.', required),
                    minLength: helpers.withMessage(
                        ({ $params }) => `O campo "assunto" deve conter pelo menos ${$params.min} caracteres.`, minLength(12)
                    ),
                    maxLength: helpers.withMessage(
                        ({ $params }) => `O campo "assunto" deve conter no máximo ${$params.max} caracteres.`, maxLength(128)
                    )
                },
                message: {
                    required: helpers.withMessage('O campo "mensagem" é obrigatório.', required),
                    minLength: helpers.withMessage(
                        ({ $params }) => `O campo "mensagem" deve conter pelo menos ${$params.min} caracteres.`, minLength(20)
                    ),
                    maxLength: helpers.withMessage(
                        ({ $params }) => `O campo "mensagem" deve conter no máximo ${$params.max} caracteres.`, maxLength(1200)
                    )
                },
            }
        }
    },
    methods: {
        onSubmit() {
            this.v$.form.$touch();
        }
    }
};
</script>