import { LATIN_ALPH_REGEX } from "@/lib/consts";

export const validateInputData = (value) => {
    if (!value.length > 0 || !LATIN_ALPH_REGEX.test(value)) return;
    return true;
};
