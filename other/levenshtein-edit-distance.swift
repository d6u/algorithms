import Foundation

func levenshteinEditDistance(a: String, _ b: String) -> Int {
    if a == b {
        return 0
    }

    if a.characters.count == 0 {
        return b.characters.count
    }

    if b.characters.count == 0 {
        return a.characters.count
    }

    var v0 = [Int](count: b.characters.count + 1, repeatedValue: 0)
    var v1 = [Int](count: b.characters.count + 1, repeatedValue: 0)

    for i in 0...b.characters.count {
        v0[i] = i
    }

    for i in 0..<a.characters.count {
        v1[0] = i + 1
        for j in 0..<b.characters.count {
            let cost = a[a.startIndex.advancedBy(i)] == b[b.startIndex.advancedBy(j)] ? 0 : 1;
            v1[j + 1] = min(v1[j] + 1,     // delete char from b
                            v0[j + 1] + 1, // insert char to b
                            v0[j] + cost)  // substitute
        }

        for j in 0...b.characters.count {
            v0[j] = v1[j]
        }
    }

    return v1[b.characters.count]
}

print(levenshteinEditDistance("levenshteinEditDistance", "ros"))
print(levenshteinEditDistance("levenshteinEditDistance", "levenshteinEditDistanca"))
