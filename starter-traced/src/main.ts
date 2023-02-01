import "@effect-app/prelude/_global"

export interface Name {
  getName: Effect<never, never, string>;
}

export const Name: Tag<Name> = Tag<Name>();

export const program: Effect<Name, never, void> = Effect.gen(function* ($) {
  const { getName } = yield* $(Effect.service(Name));

  yield* $(Effect.log(`Hello ${yield* $(getName)}`));
  yield* $(Effect.die("Error"));
});

export const NameLive: Layer<never, never, Name> = Layer.effect(Name,
  Effect.sync(() => ({
    getName: Effect.succeed("Mike"),
  }))
);

program
  .provideLayer(NameLive)
  .tapErrorCause(_ => Effect.logErrorCauseMessage("Error", _))
  .runFork
