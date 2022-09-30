export function setCookie(coockieName: string, cvalue: string, exdays: number) {
    const expires = `expires=${new Date(exdays * 1000).toString()}`;
    document.cookie = coockieName + "=" + cvalue + ";" + expires + ";path=/";
}

export function deleteCookie(coockieName: string) {
    setCookie(coockieName, "", -1)
}

export function getCookie(coockieName: string) {
    let name = coockieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
