import "@effect-app/prelude/_global"

const m = <R, E, A>(eff: Effect<R, E, (req: number) => A>) => {
  return m
}

const syncGood: <A>(ev: () => A) => Effect<never, never, A> = Effect.sync

const test = m(Effect(req => req + 1))
const testGood = m(syncGood(() => req => req + 1))
const test2 = m(Effect.sync(req => req + 1))
const test3 = m(Effect.sync(() => req => req + 1))
const test4 = m(Effect.succeed(req => req + 1))
const test5 = m(Effect.suspendSucceed(() => Effect(req => req + 1)))
