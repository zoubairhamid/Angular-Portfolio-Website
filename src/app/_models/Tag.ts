export class Tag{ 

    static readonly ANGULAR = new Tag("Angular", "red");
    static readonly REACT = new Tag("React", "#10A7A7");
    static readonly LIBGDX = new Tag("LibGDX", "brown"); 
    static readonly NODEJS = new Tag("Node.js", "#757063");
    static readonly PYTHON = new Tag("Python", "#EC6608"); 
    static readonly JAVA = new Tag("Java", "#127006"); 
    static readonly JAVASCRIPT = new Tag("JavaScript", "#66cc12"); 
    static readonly TYPESCRIPT = new Tag("TypeScript", "#FFC300");
    static readonly HTML = new Tag("HTML", "black"); 
    static readonly CSS = new Tag("CSS", "purple"); 
    static readonly KOTLIN = new Tag("Kotlin", "#E75480"); 
    static readonly SQL = new Tag("SQL", "blue"); 

    private constructor(private readonly key: string, public readonly color: string){ 

    }

    toString(){ 
        return this.key
    }
}