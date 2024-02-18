<template>
    <div class="contact__form">
        <form @submit.prevent="onSubmit()">
            <input type="text" class="form__input-text" placeholder="Digite seu nome..." v-model.trim="form.name" :disabled="sendingStatus">
            <input type="text" class="form__input-text" placeholder="Digite seu telefone/whatsapp..." v-maska data-maska="['(##) #####-####', '(##) ####-####']" v-model.trim="form.phone" :disabled="sendingStatus">
            <input type="text" class="form__input-text" placeholder="Digite seu endereço de e-mail..." v-model.trim="form.email" :disabled="sendingStatus">
            <input type="text" class="form__input-text" placeholder="Digite o assunto..." v-model.trim="form.subject" :disabled="sendingStatus">
            <textarea class="form__textarea" placeholder="Escreva sua mensagem..." v-model.trim="form.message" :disabled="sendingStatus"></textarea>
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
import form from './../../services/form';

export default {
    name: 'VueForm',
    data() {
        return {
            form: { name: '', phone: '', email: '', subject: '', message: '' },
            sendingStatus: false,
            loader: true,
            sendStatus: ''
        }
    },
    setup() {
        const v$ = useVuelidate(validations);
        
        return { v$ };
    },
    validations() {
        return validations;
    },
    methods: {
        onSubmit() {
            this.v$.form.$touch();

            if (!this.v$.form.$invalid) {
                this.sendingStatus = true;

                form.send(this.form)
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