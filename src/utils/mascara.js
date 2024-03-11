
export const masks = {
    maskCpf: (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1-$2")
            .replace(/(-\d{2})\d+?$/, "$1");
    },
    maskTelefone: (value) => {
        if (value.replace(/\D/g, "").length <= 10) {
            return value
                .replace(/\D/g, "")
                .replace(/(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{4})(\d)/, "$1-$2");
        } else {
            return value
                .replace(/\D/g, "")
                .replace(/(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{5})(\d)/, "$1-$2")
                .replace(/(-\d{4})\d+?$/, "$1");
        }
    },
    maskNumero: (value) => {
        return value
            .replace(/\D/g, "")
    },
    maskSus: (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{15})\d+?$/, "$1")
    },
    maskCep: (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .replace(/(-\d{3})\d+?$/, "$1")

    }
}