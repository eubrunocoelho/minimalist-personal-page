<template>
    <div class="contact__form">
        <form @submit.prevent="onSubmit(form.name, form.whatsapp, form.email, form.subject, form.message)">
            <input type="text" class="form__input-text" placeholder="Digite seu nome..." v-model.trim="form.name">
            <input type="text" class="form__input-text" placeholder="Digite seu telefone/whatsapp..."
                v-model.trim="form.whatsapp">
            <input type="text" class="form__input-text" placeholder="Digite seu endereço de e-mail..."
                v-model.trim="form.email">
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
                    required
                },
                whatsapp: {
                    required
                },
                email: {
                    required
                },
                subject: {
                    required
                },
                message: {
                    required
                }
            }
        }
    },
    methods: {
        onSubmit(name, whatsapp, email, subject, message) {
            this.form.name = name;
            this.v$.form.name.$touch();

            this.form.whatsapp = whatsapp;
            this.v$.form.whatsapp.$touch();

            this.form.email = email;
            this.v$.form.email.$touch();

            this.form.subject = subject;
            this.v$.form.subject.$touch();

            this.form.message = message;
            this.v$.form.message.$touch();
        }
    }
};
</script>