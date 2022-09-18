export interface GameParams {
    id: string;
    title: string;
    banner: string;
}

export declare global {
    namespace Reactnavigation {
        interface RootParamList {
            home: undefined;
            game: GamePrams; 
        }
    }
}