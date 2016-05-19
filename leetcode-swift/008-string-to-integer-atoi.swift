class Solution {
    func myAtoi(str: String) -> Int {
        if str.characters.count == 0 {
            return 0
        }

        var i = str.startIndex

        while str[i] == " " {
            i = i.advancedBy(1)
        }

        var sign = Character("+")

        if str[i] == "+" || str[i] == "-" {
            sign = str[i]
            i = i.advancedBy(1)
        }

        var num = 0

        let unicodeScalars = str.unicodeScalars

        var j = unicodeScalars.startIndex.advancedBy(str.startIndex.distanceTo(i))

        while j < unicodeScalars.endIndex {
            let n = Int(unicodeScalars[j].value) - 48
            if n >= 0 && n <= 9 {
                num = num * 10 + n
            } else {
                break
            }
            if num > 2147483648 {
                num = 2147483648
                break
            }
            j = j.advancedBy(1)
        }

        num = sign == "-" ? -num : num

        if num > 2147483647 {
            return 2147483647
        }

        if num < -2147483648 {
            return -2147483648
        }

        return num
    }
}

print(Solution().myAtoi("9223372036854775809"))
