
# Fake-News-Detection

Project By: 

*Sidharth Nair - 16010120032*,
*Rahi Patil - 16010120038*,
*Manan Sayar - 16010120045*


Mentor: Mrs Smita Sankhe 


# Problem Statement:
Develop a methodology for identifying fake news by leveraging online newspapers and social media platforms through text scraping. The accuracy of the proposed approach
will be evaluated using several machine learning algorithms. This research aims to contribute to the ongoing efforts to combat the dissemination of misleading 
information by providing an effective and reliable means of detecting fake news


# Motivation:

# Scope
Our project's focus is identifying bogus news on social media. We want to distinguish between legitimate and bogus news, identify it, and stop it from spreading. We aim to use machine learning algorithms to categorize news stories as bogus or real. Using machine learning methods, we hope to improve the effectiveness of fake news identification and determine which model gives us the most accurate result. Our aim is to create a user friendly software for the user as well as online news providers who post news online.

# Objectives
The primary objective of the proposed system is to examine and research the hidden correlations and patterns between the data in the fake news dataset. The problem's
answer could offer knowledge to stop the spread of bogus or actual news, which would have significant societal and technological repercussions. Most of the existing research uses various models to handle each of these issues separately. Dealing with fake news gets increasingly crucial because it is one of the essentials that is crucial for society.


# System Architecture 

![image](https://user-images.githubusercontent.com/82643868/235761228-88407a10-c0fe-4370-b59b-535cd901e14f.png)

# Proposed System Model Implementation:
Our proposed system starts with data scraping from the website politifacts.com. The scraped data is then classified as real or fake using a metric. Further, we visualized the real and fake news using word clouds. We then applied various preprocessing techniques such as regular expressions, tokenization, stop word removal, 
and lemmatization to clean the data. We also applied different feature extraction techniques such as count vectorizer/bag of words and tf-idf to extract relevant features from the data. Finally, we trained several machine learning models such as Logistic Regression, Random Forest, and Naive Bayes to detect fake news .

# Experimental Results and Its Analysis :
The experimental results showed that the proposed system model achieved high accuracy in detecting fake news articles. The model's performance was evaluated using metrics such as precision, recall, and F1-score. The analysis of the results revealed the effectiveness of the feature extraction and classification techniques 
used in the model.

The scores of various models:
1. Logistic Regression
• Accuracy: 0.921885087153002
• Precision: 0.8961352657004831
• Recall: 0.954954954954955
• F1 Score: 0.9246105919003116



