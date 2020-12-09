import { YearItemProps } from "../ui/YearItem";
import reportRepair from "./2020/1_report_repair";
import passwordPhilosophy from "./2020/2_password_philosophy";
import tobogganTrajectory from "./2020/3_toboggan_trajectory";
import passportProcessing from "./2020/4_passport_processing";
import binaryBoarding from "./2020/5_binary_boarding";
import customCustoms from "./2020/6_custom_customs";
import handyHaversacks from "./2020/7_handy_haversacks";
import handheldHalting from "./2020/8_handheld_halting";
import encodingError from "./2020/9_encoding_error";

const solutions: YearItemProps[] = [
    {
        id: "2020",
        tasks: [
            {
                id: "1",
                title: "Day 1: Report Repair",
                first: true,
                second: true,
                descriptionUri: "https://adventofcode.com/2020/day/1",
                solutionUri:
                  "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/1_report_repair/index.ts",
                inputUri: "/data/report_repair.txt",
                solutionFn: reportRepair,
              },
              {
                id: "2",
                title: "Day 2: Password Philosophy",
                first: true,
                second: true,
                descriptionUri: "https://adventofcode.com/2020/day/2",
                solutionUri:
                  "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/2_password_philosophy/index.ts",
                inputUri: "/data/password_philosophy.txt",
                solutionFn: passwordPhilosophy,
              },
              {
                id: "3",
                title: "Day 3: Toboggan Trajectory",
                first: true,
                second: true,
                descriptionUri: "https://adventofcode.com/2020/day/3",
                inputUri: "/data/toboggan_trajectory.txt",
                solutionUri:
                  "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/3_toboggan_trajectory/index.ts",
                solutionFn: tobogganTrajectory,
              },
              {
                id: "4",
                title: "Day 4: Passport Processing",
                first: true,
                second: true,
                descriptionUri: "https://adventofcode.com/2020/day/4",
                inputUri: "/data/passport_processing.txt",
                solutionUri:
                  "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/4_passport_processing/index.ts",
                solutionFn: passportProcessing,
              },
              {
                id: "5",
                title: "Day 5: Binary Boarding",
                first: true,
                second: true,
                descriptionUri: "https://adventofcode.com/2020/day/5",
                inputUri: "/data/binary_boarding.txt",
                solutionUri:
                  "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/5_binary_boarding/index.ts",
                solutionFn: binaryBoarding,
              },
              {
                id: "6",
                title: "Day 6: Custom Customs",
                first: true,
                second: true,
                descriptionUri: "https://adventofcode.com/2020/day/6",
                inputUri: "/data/custom_customs.txt",
                solutionUri:
                  "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/6_custom_customs/index.ts",
                solutionFn: customCustoms,
              },
              {
                id: "7",
                title: "Day 7: Handy Haversacks",
                first: true,
                second: true,
                descriptionUri: "https://adventofcode.com/2020/day/7",
                inputUri: "/data/handy_haversacks.txt",
                solutionUri:
                  "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/7_handy_haversacks/index.ts",
                solutionFn: handyHaversacks,
              },
              {
                id: "8",
                title: "Day 8: Handheld Halting",
                first: true,
                second: true,
                descriptionUri: "https://adventofcode.com/2020/day/8",
                inputUri: "/data/handheld_halting.txt",
                solutionUri:
                  "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/8_handheld_halting/index.ts",
                solutionFn: handheldHalting,
              },
              {
                id: "9",
                title: "Day 9: Encoding Error",
                first: false,
                second: false,
                descriptionUri: "https://adventofcode.com/2020/day/9",
                inputUri: "/data/encoding_error.txt",
                solutionUri:
                  "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/9_encoding_error/index.ts",
                solutionFn: encodingError,
              },
        ]
    }
]

export default solutions;