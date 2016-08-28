public class Solution {
    public int ladderLength(String beginWord, String endWord, Set<String> wordList) {
        Set<String> head = new HashSet<>();
        Set<String> tail = new HashSet<>();

        head.add(beginWord);
        tail.add(endWord);

        wordList.remove(beginWord);
        wordList.remove(endWord);

        Set<String> phead = null;
        Set<String> ptail = null;

        int dist = 2;

        while (!head.isEmpty() && !tail.isEmpty()) {
            if (head.size() < tail.size()) {
                phead = head;
                ptail = tail;
            } else {
                phead = tail;
                ptail = head;
            }

            Set<String> temp = new HashSet<>();

            for (String word : phead) {
                char[] chars = word.toCharArray();

                for (int i = 0; i < chars.length; i++) {
                    char originalChar = chars[i];

                    for (int j = 0; j < 26; j++) {
                        if (j + 'a' != originalChar) {
                            chars[i] = (char) (j + 'a');
                            String str = new String(chars);

                            if (ptail.contains(str)) {
                                return dist;
                            }

                            if (wordList.contains(str)) {
                                wordList.remove(str);
                                temp.add(str);
                            }
                        }
                    }

                    chars[i] = originalChar;
                }
            }

            if (head.size() < tail.size()) {
                head = temp;
            } else {
                tail = temp;
            }

            dist++;
        }

        return 0;
    }
}
