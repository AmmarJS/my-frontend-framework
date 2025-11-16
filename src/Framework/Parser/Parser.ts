class Parser {
    // static instance: Parser | null = null;

    // private constructor() {}

    // public static createParser() {
    //     if(this.instance) return this.instance;

    //     this.instance = new Parser()

    //     return this.instance;
    // }

    public static convertStringIntoHTML(html: string): HTMLElement {
        const doc = new DOMParser().parseFromString(html, "text/html");
        
        return doc.body;
    }
}

export default Parser