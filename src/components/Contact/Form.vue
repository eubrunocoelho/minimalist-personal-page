<template>
    <div class="contact__form">
        <form @submit.prevent="onSubmit()">
            <input type="text" class="form__input-text" placeholder="Digite seu nome..." v-model.trim="form.name">
            <input type="text" class="form__input-text" placeholder="Digite seu telefone/whatsapp..." @input="phoneMask" v-model.trim="form.phone">
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
                phone: '',
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
                phone: {
                    required: helpers.withMessage('O campo "telefone" é obrigatório.', required),
                    regex: helpers.withMessage('O formato de "telefone" deve ser (DD) 00000-0000 ou (DD) 0000-0000.', helpers.regex(/^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/))
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
        phoneMask() {
            let phoneValue = this.form.phone.replace(/\D/g, '');
            let formattedValue = '';

            if (phoneValue.length > 0) {
                formattedValue = '(' + phoneValue.substring(0, 2);

                if (phoneValue.length > 10) {
                    formattedValue += ') ' + phoneValue.substring(2, 7);
                    formattedValue += '-' + phoneValue.substring(7, 11);
                } else {
                    formattedValue += ') ' + phoneValue.substring(2, 6);

                    if (phoneValue.length > 6) {
                        formattedValue += '-' + phoneValue.substring(6, 10);
                    }
                }
            }

            this.form.phone = formattedValue;
        },
        onSubmit() {
            this.v$.form.$touch();
        }
    }
};
</script>