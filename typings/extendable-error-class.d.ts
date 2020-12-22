declare module 'extendable-error-class' {
    export default class ExtendableError extends Error {
        constructor(message: string);
    }
}
