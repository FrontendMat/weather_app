export function classNames(cls, additional) {
    return [
        cls,
        ...additional.filter(Boolean),
    ].join(" ");
}
