# Description

Seed-generator is a library for generating valid seed phrases. Disclaimer: Please only use this for educational
purposes.

# What makes a seed phrase valid?

1. It contains a random set of 23 words complying with the
   [BIP32 standard](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt)

2. The 24th word is a checksum derived from the other 23 words.

## Usage

`npx ts-node ./examples/logSeedPhrase.ts`

# Relevant Links
* https://support.ledger.com/hc/en-us/articles/4415198323089-How-Ledger-device-generates-24-word-recovery-phrase?docs=true
* http://ledgernano.tips/
