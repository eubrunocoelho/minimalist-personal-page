<template>
    <div class="contact__form">
        <form @submit.prevent="onSubmit()">
            <input type="text" class="form__input-text" placeholder="Digite seu nome..." v-model.trim="form.name"
                :disabled="sendingStatus">
            <input type="text" class="form__input-text" placeholder="Digite seu telefone/whatsapp..." @input="phoneMask"
                v-model.trim="form.phone" :disabled="sendingStatus">
            <input type="text" class="form__input-text" placeholder="Digite seu endereço de e-mail..."
                v-model.trim="form.email" :disabled="sendingStatus">
            <input type="text" class="form__input-text" placeholder="Digite o assunto..." v-model.trim="form.subject"
                :disabled="sendingStatus">
            <textarea class="form__textarea" placeholder="Escreva sua mensagem..." v-model.trim="form.message"
                :disabled="sendingStatus"></textarea>
            <div class="form__button-area">
                <button type="submit" class="button" :disabled="sendingStatus">Enviar</button>
            </div>
        </form>
        <div class="form__alerts" v-if="(v$.form.$errors.length > 0) && (!sendingStatus)">
            <template v-for="(error, id) of v$.form.$errors" :key="id">
                <div class="alert alert--danger">
                    <p>{{ error.$message }}</p>
                </div>
            </template>
        </div>
        <div class="form__alerts" v-if="sendingStatus">
            <div :style="{ width: '100%', display: 'flex', justifyContent: 'center' }" v-if="loader">
                <div class="loader"></div>
            </div>
            <div class="alert alert--success" v-if="sendStatus == 'SUCCESS'">
                <p>Mensagem enviada com sucesso!</p>
            </div>
            <div class="alert alert--danger" v-if="sendStatus == 'ERROR'">
                <p>Houve um erro ao tentar enviar a mensagem. Atualize a página e tente novamente.</p>
            </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { validations } from './../../validations/validations';
import contact from './../../services/contact';

export default {
    name: 'VueForm',
    setup() {
        const v$ = useVuelidate(validations);
        return { v$ };
    },
    data() {
        return {
            form: { name: '', phone: '', email: '', subject: '', message: '' },
            sendingStatus: false,
            loader: true,
            sendStatus: ''
        }
    },
    validations() {
        return validations;
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

            if (!this.v$.form.$invalid) {
                this.sendingStatus = true;

                contact.send(this.form)
                    .then(() => {
                        this.loader = false;
                        this.sendStatus = 'SUCCESS';
                    })
                    .catch(() => {
                        this.loader = false;
                        this.sendStatus = 'ERROR';
                    });
            }
        }
    }
};
</script>