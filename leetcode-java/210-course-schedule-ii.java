public class Solution {

    class Course {
        boolean visited = false;
        boolean tested = false;
        int number;
        List<Course> pre = new ArrayList<Course>();

        public Course(int i) {
            number = i;
        }

        public void add(Course c) {
            pre.add(c);
        }
    }

    private int N = 0;

    public int[] findOrder(int numCourses, int[][] prerequisites) {
        Course[] courses = new Course[numCourses];

        for (int i = 0; i < numCourses; i++) {
            courses[i] = new Course(i);
        }

        for (int[] pre : prerequisites) {
            courses[pre[0]].add(courses[pre[1]]);
        }

        int[] result = new int[numCourses];

        for (int i = 0; i < numCourses; i++) {
            if (isCyclic(courses[i], result)) {
                return new int[0];
            }
        }

        return result;
    }

    boolean isCyclic(Course cur, int[] result) {
        if (cur.tested) {
            return false;
        }
        if (cur.visited) {
            return true;
        }
        cur.visited = true;
        for (Course c : cur.pre) {
            if (isCyclic(c, result)) {
                return true;
            }
        }
        cur.tested = true;
        result[N++] = cur.number;
        return false;
    }

}
