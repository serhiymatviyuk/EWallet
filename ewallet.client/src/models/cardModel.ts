import { CardState, CardType, CurrencyType } from "./enums";

export class CardModel {
    public CardNumber: string = '';
    public IsValid: boolean = false;
    public State: CardState | undefined = undefined;
    public Type: CardType | undefined = undefined;
    public Currency?: CurrencyType = undefined;
}