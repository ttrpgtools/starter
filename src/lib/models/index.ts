export type Identifiable = { id: string };
export type Named = { name: string };
export type Touchable = { touched: string };
export type Typed = { type: string };
export type Serializable<TOut = unknown> = { toJSON: () => TOut };
export type Persistable = Identifiable & Typed & Touchable;
