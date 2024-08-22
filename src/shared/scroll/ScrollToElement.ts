export const scrollToElement = (id: string) => {
    const element = document.getElementById(String(id));
    element?.scrollIntoView({
        behavior: 'smooth'
    });
}