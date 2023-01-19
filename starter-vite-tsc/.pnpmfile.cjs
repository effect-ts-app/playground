// TODO: Write a marker to package.json instead?
const enforceSingleVersion = [
    "@effect/io",
    "@effect/stm",
    "@fp-ts/core",
    "@fp-ts/data",
    // "@tsplus/stdlib",
    // "@effect/core",
    // "@effect/cache",
    "@effect-ts/core",
    "@effect-ts/system",
    "@effect-ts-app/core",
    "@effect-ts-app/infra",
    "@effect-ts-app/schema",
    "@effect-ts-app/boilerplate-infra",
    "@effect-ts-app/boilerplate-prelude",
    "@effect-ts-app/boilerplate-schema",
    "@effect-ts-app/boilerplate-vue",
    "vue",
]

function afterAllResolved(lockfile, context) {
    context.log(`Checking duplicate packages`)
    const packagesKeys = Object.keys(lockfile.packages);
    const found = {}
    for (let p of packagesKeys) {
        for (let x of enforceSingleVersion) {
            if (p.startsWith(`/${x}/`)) {
                if (found[x]) {
                    found[x] += 1
                } else {
                    found[x] = 1
                }
            }
        }
    }
    let msg = ''
    for (let p in found) {
        const count = found[p]
        if (count > 1) {
            msg += `${p} found ${count} times\n`
        }
    }
    if (msg) {
        throw new Error(msg)
    }
    return lockfile
}

function readPackage(pkg, context) {
    if (pkg.name === "vue-tsc") {
        context.log("Adding classic ts to vue-tsc")
        // works around vue-tsc watch issues with later typescript versions.
        pkg.dependencies["typescript"] = "https://cdn.jsdelivr.net/npm/@tsplus/installer@0.0.150/compiler/typescript.tgz"
    }
    return pkg
}


module.exports = {
    hooks: {
        afterAllResolved,
        readPackage
    }
}
