class Solution {
    func convert(s: String, _ numRows: Int) -> String {
        var grid = [[Character]](count: numRows, repeatedValue: [Character]())

        var i = s.startIndex

        while i < s.endIndex {
            var j = 0
            while j < numRows && i < s.endIndex {
                grid[j].append(s[i])
                j += 1
                i = i.advancedBy(1)
            }
            j = numRows - 2
            while j >= 1 && i < s.endIndex {
                grid[j].append(s[i])
                j -= 1
                i = i.advancedBy(1)
            }
        }

        var str = ""

        for row in grid {
            str += row.map({ "\($0)" }).joinWithSeparator("")
        }

        return str
    }
}
