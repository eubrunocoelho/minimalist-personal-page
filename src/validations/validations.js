import { helpers, required, minLength, maxLength, email } from '@vuelidate/validators';

const withCustomMessage = (validator, message) => helpers.withMessage(message, validator);

const MIN_LENGTH_NAME = 3;
const MAX_LENGTH_NAME = 128;
const MAX_LENGTH_EMAIL = 128;
const MIN_LENGTH_SUBJECT = 6;
const MAX_LENGTH_SUBJECT = 128;
const MIN_LENGTH_MESSAGE = 20;
const MAX_LENGTH_MESSAGE = 1200;

const errorMessages = {
    required: (field) => `O campo "${field}" é obrigatório.`,
    minLength: (field, min) => `O campo "${field}" deve conter pelo menos ${min} caracteres.`,
    maxLength: (field, max) => `O campo "${field}" deve conter no máximo ${max} caracteres.`,
    email: (field) => `O campo "${field}" está inválido.`,
    phoneFormat: (field) => `O formato de "${field}" deve ser (DD) 00000-0000 ou (DD) 0000-0000.`
};

const validations = {
    form: {
        name: {
            required: withCustomMessage(
                required,
                () => errorMessages.required('nome')
            ),
            minLength: withCustomMessage(
                minLength(MIN_LENGTH_NAME),
                () => errorMessages.minLength('nome', MIN_LENGTH_NAME)
            ),
            maxLength: withCustomMessage(
                maxLength(MAX_LENGTH_NAME),
                () => errorMessages.maxLength('nome', MAX_LENGTH_NAME)
            )
        },
        phone: {
            required: withCustomMessage(
                required,
                () => errorMessages.required('telefone')
            ),
            regex: withCustomMessage(
                helpers.regex(/^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/),
                () => errorMessages.phoneFormat('telefone')
            )
        },
        email: {
            required: withCustomMessage(
                required,
                () => errorMessages.required('e-mail')
            ),
            email: withCustomMessage(
                email,
                () => errorMessages.email('e-mail')
            ),
            maxLength: withCustomMessage(
                maxLength(MAX_LENGTH_EMAIL),
                () => errorMessages.maxLength('e-mail', MAX_LENGTH_EMAIL)
            )
        },
        subject: {
            required: withCustomMessage(
                required,
                () => errorMessages.required('assunto')
            ),
            minLength: withCustomMessage(
                minLength(MIN_LENGTH_SUBJECT),
                () => errorMessages.minLength('assunto', MIN_LENGTH_SUBJECT)
            ),
            maxLength: withCustomMessage(
                maxLength(MAX_LENGTH_SUBJECT),
                () => errorMessages.maxLength('assunto', MAX_LENGTH_SUBJECT)
            )
        },
        message: {
            required: withCustomMessage(
                required,
                () => errorMessages.required('mensagem')
            ),
            minLength: withCustomMessage(
                minLength(MIN_LENGTH_MESSAGE),
                () => errorMessages.minLength('mensagem', MIN_LENGTH_MESSAGE)
            ),
            maxLength: withCustomMessage(
                maxLength(MAX_LENGTH_MESSAGE),
                () => errorMessages.maxLength('mensagem', MAX_LENGTH_MESSAGE)
            )
        }
    }
};

export { validations };