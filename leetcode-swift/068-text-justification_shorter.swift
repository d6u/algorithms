class Solution {
    func fullJustify(words: [String], _ maxWidth: Int) -> [String] {
        var result = [String]();
        var start = 0;

        while start < words.count {
            var lineWordsTotalLength = 0
            var lineWordCount = 0

            while start + lineWordCount < words.count && lineWordsTotalLength + words[start + lineWordCount].characters.count <= maxWidth - lineWordCount
            {
                lineWordsTotalLength += words[start + lineWordCount].characters.count
                lineWordCount += 1
            }

            var line = words[start]

            for index in 1..<lineWordCount {
                if start + lineWordCount == words.count {
                    line += " ";
                } else {
                    line += String(count: (maxWidth - lineWordsTotalLength) / (lineWordCount - 1), repeatedValue: Character(" "))
                    if index - 1 < (maxWidth - lineWordsTotalLength) % (lineWordCount - 1) {
                        line += " "
                    }
                }

                line += words[start + index]
            }

            line += String(count: maxWidth - line.characters.count, repeatedValue: Character(" "))

            result.append(line)

            start += lineWordCount
        }

        return result;
    }
}

print(Solution().fullJustify(["a"], 1))
print(Solution().fullJustify(["Don't","go","around","saying","the","world","owes","you","a","living;","the","world","owes","you","nothing;","it","was","here","first."], 30))
