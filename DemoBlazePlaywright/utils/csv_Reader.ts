import fs from "fs"
import path from "path"
import { parse } from "csv-parse/sync"

export interface ContactData {
    testname: string
    email: string
    name: string
    message: string
}

export function readContactData(): ContactData[] {
    const filepath = path.resolve(__dirname, "../test-data/contactData.csv")
    const fileContent = fs.readFileSync(filepath, "utf-8")
    return parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    }) as ContactData[]
}