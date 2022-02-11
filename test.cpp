#include <iostream>
using namespace std;

bool fun(string s)
{
    if (s.length() == 0)
        return false;
    for (int i = 0; i < s.length(); i++)
    {
        if (s[i] == 'a')
            for (int j = i + 1; j < s.length(); j++)
                if (s[j] == 'b')
                {
                    if (j - i == 4)
                        return false;

                    break;
                }

                else if (s[i] == 'b')
                    for (int j = i + 1; j < s.length(); j++)
                        if (s[j] == 'a')
                        {
                            if (j - i == 4)                        
                                return false;

                            break;
                        }
    }
    return true;
}

int main()
{
    string s;
    cin >> s;

    cout << fun(s);
}