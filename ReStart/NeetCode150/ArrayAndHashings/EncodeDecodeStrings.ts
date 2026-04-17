// Encode and Decode Strings
let strings = ["neet", "code", "love", "you"]

class EncodeDecode {
    encode(strs: string[]): string {
        let result = "";

        for (const str of strs) {
            result += str.length + "#" + str;
        }

        return result;
    }

    decode(s: string): string[] {
        const result: string[] = [];
        let i = 0;

        while (i < s.length) {
            let j = i;
            while (j < s.length && s[j] !== "#") {
                j++;
            }

            const length = parseInt(s.slice(i, j), 10);;

            const word = s.slice(j + 1, j + 1 + length);
            result.push(word);

            i = j + 1 + length;
        }

        return result;
    }
}

const findEncode = new EncodeDecode()

const encodedString= findEncode.encode(strings)
console.log(encodedString);
console.log(findEncode.decode(encodedString));
