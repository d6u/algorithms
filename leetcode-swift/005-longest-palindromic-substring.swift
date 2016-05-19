class Solution {
    func longestPalindrome(s: String) -> String {
        let len = s.characters.count

        if len <= 1 {
            return s
        }

        let chars = [Character](s.characters)
        var isPal = [[Bool]](count: len, repeatedValue: [Bool](count: len, repeatedValue: false))
        var start = 0
        var maxLen = 1

        for i in (0..<len).reverse() {
            for j in i..<len {
                if (j - i + 1 < 3 || isPal[i+1][j-1]) && chars[i] == chars[j] {
                    isPal[i][j] = true
                    if j - i + 1 > maxLen {
                        start = i
                        maxLen = j - i + 1
                    }
                }
            }
        }

        return s[s.startIndex.advancedBy(start)..<s.startIndex.advancedBy(start + maxLen)]
    }
}
