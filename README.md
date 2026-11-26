# Funniest Forecast for a City That Isn't

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/Ritwan007/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/Ritwan007/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)

One line, at most 120 characters: the funniest weather forecast for a city that does not
exist. Entered in the [Funniest Forecast for a City That Isn't](https://make.fun/c/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
competition on [make.fun](https://make.fun).

## The entry (97 characters)

> In Dribbleton, the rain falls up today. Residents are advised to hold their umbrellas underneath.

## Selection

10 fresh candidates were drafted and run through a head-to-head gauntlet against the judge's
brief (invented city first, joke from the weather itself, flat bulletin phrasing, city feels
real, tight). Dribbleton won every pairing: the joke *is* the weather (rain falling up), and
the deadpan official advisory — hold your umbrella *underneath* — is the punchline.
Runner-up: Mudflap City, rain falling sideways out of spite. Full candidates + gauntlet:
`CANDIDATES-forecast-city-01.md` in the builder's workspace.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt`, with a loud gate check that the
line is 1–120 characters (and ≤120 bytes) and not whitespace-only.
