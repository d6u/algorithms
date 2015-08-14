import Foundation

func levenshteinEditDistance(a: String, b: String) -> Int {
    if a == b {
        return 0
    }

    if count(a) == 0 {
        return count(b)
    }

    if count(b) == 0 {
        return count(a)
    }

    var v0 = [Int](count: count(b) + 1, repeatedValue: 0)
    var v1 = [Int](count: count(b) + 1, repeatedValue: 0)

    for var i = 0; i <= count(b); i++ {
        v0[i] = i
    }

    for var i = 0; i < count(a); i++ {
        v1[0] = i + 1
        for var j = 0; j < count(b); j++ {
            var cost = Array(a)[i] == Array(b)[j] ? 0 : 1;
            v1[j + 1] = min(v1[j] + 1,     // delete char from b
                            v0[j + 1] + 1, // insert char to b
                            v0[j] + cost) // substitute
        }

        for var j = 0; j <= count(b); j++ {
            v0[j] = v1[j]
        }
    }

    return v1[count(b)]
}

println(levenshteinEditDistance("levenshteinEditDistance", "ros"))
