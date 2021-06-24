---
title: "Self-Supervised Learning - Part 2: From Entropy to Augmented Multiscale
  Deep InfoMax"
date: 2021-06-24T15:21:35.648Z
published: true
tags:
  - self-supervised learning
  - entropy
  - mutual information
  - infomax
  - deep infomax
  - amdim
description: DeepInfoMax and Amdim are two self-supervised models that are very
  popular in recent times. They are constructed based on the idea of the InfoMax
  principle. Therefore, to fully understand these two models, we must first know
  about the underlying basis of the InfoMax principle which includes entropy,
  mutual information, their properties, and relations.
---
<style>
#tabletype1 {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#tabletype1 td, #tabletype1 th {

  width: 20%;
  border: 1px solid #ddd;
  padding: 8px;
}

#tabletype1 tr:nth-child(even){background-color: #f2f2f2;}

#tabletype1 tr:hover {background-color: #ddd;}

#tabletype1 th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #000000;
  color: white;
}

#tabletype2 {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 50%;
}
</style>

## Entropy \[1, 2]

The knowledge of entropy is required to understand mutual information.

The entropy calculates the “unpredictability” of a random variable, which means that it will return high value for a random variable with high level of unpredictability and low value for the one that is more easily predictable.

The entropy equation: 

![](https://latex.codecogs.com/gif.latex?H%28X%29%3D-%5Csum_%7Bx%20%5Cin%20X%7DP%28x%29%20%5Clog%20P%28x%29)

Two examples to show when entropy is low and when it is high. 

**Example 1** Compute the entropy of a fair coin (from \[1])

Given that:

![equation](https://latex.codecogs.com/gif.latex?P%28X%3Dheads%29%20%3D%20%5Cfrac%7B1%7D%7B2%7D)

![equation](https://latex.codecogs.com/gif.latex?P%28X%3Dtails%29%20%3D%20%5Cfrac%7B1%7D%7B2%7D)

Using entropy equation, we have:

![equation](https://latex.codecogs.com/gif.latex?%5Cbegin%7Balign*%7D%20H%28P%29%20%26%20%3D%20-%5Csum_%7Bx%20%5Cin%20%5C%7Bheads%2Ctails%5C%7D%7D%20P%28x%29%20%5Clog%20P%28x%29%20%5C%5C%20%26%20%3D%20-%5Cleft%20%5B%20%5Cfrac%7B1%7D%7B2%7D%20%5Clog%20%5Cfrac%7B1%7D%7B2%7D%20&plus;%20%5Cfrac%7B1%7D%7B2%7D%20%5Clog%20%5Cfrac%7B1%7D%7B2%7D%20%5Cright%20%5D%20%5C%5C%20%26%20%3D%20-%5Cleft%20%5B%20-%5Cfrac%7B1%7D%7B2%7D%20&plus;%20-%5Cfrac%7B1%7D%7B2%7D%20%5Cright%20%5D%20%5C%5C%20%26%20%3D%201%20%5Cend%7Balign*%7D)

**Example 2** Compute the entropy of an unfair coin

Given that:

![equation](https://latex.codecogs.com/gif.latex?P%28X%3Dheads%29%20%3D%20%5Cfrac%7B3%7D%7B4%7D)

![equation](https://latex.codecogs.com/gif.latex?P%28X%3Dtails%29%20%3D%20%5Cfrac%7B1%7D%7B4%7D)

Using entropy equation, we have:

![equation](https://latex.codecogs.com/gif.latex?%5Cbegin%7Balign*%7D%20H%28P%29%20%26%20%3D%20-%5Csum_%7Bx%20%5Cin%20%5C%7Bheads%2Ctails%5C%7D%7D%20P%28x%29%20%5Clog%20P%28x%29%20%5C%5C%20%26%20%3D%20-%5Cleft%20%5B%20%5Cfrac%7B3%7D%7B4%7D%20%5Clog%20%5Cfrac%7B3%7D%7B4%7D%20&plus;%20%5Cfrac%7B1%7D%7B4%7D%20%5Clog%20%5Cfrac%7B1%7D%7B4%7D%20%5Cright%20%5D%20%5C%5C%20%26%20%3D%20-%5Cleft%20%5B%20%5Cfrac%7B3%7D%7B4%7D%28-0.41503749928%29%20&plus;%20%5Cfrac%7B1%7D%7B4%7D%28-2%29%29%20%5Cright%20%5D%20%5C%5C%20%26%20%3D%200.81127812446%20%5Cend%7Balign*%7D)

\=> The entropy value is less than that in example 1. Because the coin will appear heads most of the time, which means it is more predictable (less unpredictable). Thus, the entropy is low.

**Example 3** Compute the entropy of an unfair 6-sided dice (from \[1])

Given that:

![equation](https://latex.codecogs.com/gif.latex?%5Cbegin%7Balign*%7D%20P%28X%3D1%29%20%26%20%3D%20%5Cfrac%7B1%7D%7B2%7D%20%5C%5C%20P%28X%3D2%29%20%26%20%3D%20%5Cfrac%7B1%7D%7B4%7D%20%5C%5C%20P%28X%3D3%29%20%26%20%3D%200%20%5C%5C%20P%28X%3D4%29%20%26%20%3D%200%20%5C%5C%20P%28X%3D5%29%20%26%20%3D%20%5Cfrac%7B1%7D%7B8%7D%20%5C%5C%20P%28X%3D6%29%20%26%20%3D%20%5Cfrac%7B1%7D%7B8%7D%20%5Cend%7Balign*%7D)

Using entropy equation, we have:

![equation](https://latex.codecogs.com/gif.latex?%5Cbegin%7Balign*%7D%20H%28P%29%20%26%20%3D%20-%5Csum_%7Bx%20%5Cin%20%5C%7B1%2C2%2C3%2C4%2C5%2C6%5C%7D%7D%20P%28x%29%20%5Clog%20P%28x%29%20%5C%5C%20%26%20%3D%20-%5Cleft%20%5B%20%5Cfrac%7B1%7D%7B2%7D%20%5Clog%20%5Cfrac%7B1%7D%7B2%7D%20&plus;%20%5Cfrac%7B1%7D%7B4%7D%20%5Clog%20%5Cfrac%7B1%7D%7B4%7D%20&plus;%200%20%5Clog%200%20&plus;%200%20%5Clog%200%20&plus;%20%5Cfrac%7B1%7D%7B8%7D%20%5Clog%20%5Cfrac%7B1%7D%7B8%7D%20&plus;%20%5Cfrac%7B1%7D%7B8%7D%20%5Clog%20%5Cfrac%7B1%7D%7B8%7D%20%5Cright%20%5D%20%5C%5C%20%26%20%3D%20-%5Cleft%20%5B%20-%5Cfrac%7B1%7D%7B2%7D%20&plus;%20-%5Cfrac%7B1%7D%7B2%7D%20&plus;%200%20&plus;%200%20&plus;%20-%5Cfrac%7B3%7D%7B8%7D%20&plus;%20-%5Cfrac%7B3%7D%7B8%7D%20%5Cright%20%5D%20%5C%5C%20%26%20%3D%201.75%20%5Cend%7Balign*%7D)

\=> The more values a random variable can take, the more unpredictable it becomes.

## Mutual information \[1, 2, 3, 4, 5, 6]

Mutual information measures a relationship between two random variables which are sampled concurrently. In other words, mutual information is an estimation of the amount of information in one variable which uncovers another variable. It tells how much information on one variable can averagely convey about the other. The value of mutual information is 0 if the two random variables are statistically independent.

Mutual information can also be defined as “the reduction in uncertainty about a random variable given knowledge of another” \[3]. Mutual information with a high value corresponds to a great reduction in uncertainty \[3].

The equation for mutual information of two random variables X and Y where joint distribution is represented as P<sub>XY</sub>(x,y):

![equation](https://latex.codecogs.com/gif.latex?%5Cbegin%7Balign*%7D%20I%28X%2CY%29%20%26%20%3D%20%5Csum_%7Bx%20%5Cin%20X%7D%5Csum_%7By%20%5Cin%20Y%7D%20P_%7BXY%7D%28x%2Cy%29%20%5Clog%20%5Cfrac%7BP_%7BXY%7D%28x%2Cy%29%7D%7BP_%7BX%7D%28x%29P_%7BY%7D%28y%29%7D%20%5C%5C%20%26%20%3D%20%5Csum_%7Bx%2Cy%7D%20P_%7BXY%7D%28x%2Cy%29%20%5Clog%20%5Cfrac%7BP_%7BXY%7D%28x%2Cy%29%7D%7BP_%7BX%7D%28x%29P_%7BY%7D%28y%29%7D%20%5C%5C%20%26%20%3D%20E_%7BP_%7BXY%7D%7D%20%5Clog%20%5Cfrac%7BP_%7BXY%7D%7D%7BP_%7BX%7DP_%7BY%7D%7D%20%5Cend%7Balign*%7D)

where P<sub>X</sub>(x) and P<sub>Y</sub>(y) are the marginals.

### Another way to think about the mutual information

Suppose we have an information system that can be split into 3 components: sender, channel, and receiver (or in particular input image, neural network, and output representation). The channel can be represented by a transition probability matrix.

![](../../static/images/uploads/sender_channel_receiver.jpg)

<p align=center>
    <em><b>Figure 1:</b> The formal decomposition Sender-Channel-Receiver (Image from \[2]).</em>
</p>

Considering that the sender is represented by a pattern set X including x<sub>i</sub>s and the corresponding probability density function p(x<sub>i</sub>), the receiver is represented by a pattern set Y including y<sub>i</sub>s and the corresponding probability density function p(y<sub>i</sub>). The channel is characterized by the conditional probability matrix P(y<sub>j</sub> | x<sub>i</sub>) in which each element is the conditional probability density function pairwise calculated between elements in X and Y.

The Shannon entropy equation on X and on Y:

![equation](https://latex.codecogs.com/gif.latex?%5Cbegin%7Balign*%7D%20H%28X%29%20%26%20%3D%20-%5Csum_%7Bx%7D%20p%28x%29%20%5Cln%20p%28x%29%20%5C%5C%20H%28Y%29%20%26%20%3D%20-%5Csum_%7By%7D%20p%28y%29%20%5Cln%20p%28y%29%20%5Cend%7Balign*%7D)

The formula of conditional entropy, it measures the uncertainty of X given Y:

![equation](https://latex.codecogs.com/gif.latex?%5Cbegin%7Balign*%7D%20H%28X%7CY%29%20%26%20%3D%20-%5Csum_%7By%7Dp%28y%29%5Cleft%20%5B%20%5Csum_%7Bx%7Dp%28x%7Cy%29%20%5Cln%20p%28x%7Cy%29%20%5Cright%20%5D%20%5C%5C%20%26%20%3D%20-%5Csum_%7Bx%7D%5Csum_%7By%7D%20p%28x%2Cy%29%20%5Cln%20p%28x%7Cy%29%20%5Cend%7Balign*%7D)

The formula of joint entropy (the entropy of a joint probability distribution) on X and Y:

![equation](https://latex.codecogs.com/gif.latex?H%28X%2CY%29%20%3D%20-%5Csum_%7Bx%2Cy%7D%20p%28x%2Cy%29%20%5Cln%20p%28x%2Cy%29)

Then, the equation mutual information will be:

![equation](https://latex.codecogs.com/gif.latex?I%28X%2CY%29%20%3D%20H%28X%29%20-%20H%28X%7CY%29) (represented as the reduction in uncertainty about variable X)

Let's verify if it is equal to the above equation for mutual information of two random variables X and Y:

![equation](https://latex.codecogs.com/gif.latex?%5Cdpi%7B100%7D%20%5Cbegin%7Balign*%7D%20I%28X%2CY%29%20%26%20%3D%20H%28X%29%20-%20H%28X%7CY%29%20%5C%5C%20%26%20%3D%20-%5Csum_%7Bx%7Dp%28x%29%20%5Cln%20p%28x%29%20-%20%5Cleft%20%28-%5Csum_%7By%7Dp%28y%29%20%5Cleft%20%5B%20%5Csum_%7Bx%7Dp%28x%7Cy%29%20%5Cln%20p%28x%7Cy%29%20%5Cright%20%5D%20%5Cright%20%29%20%5C%5C%20%26%20%3D%20%5Csum_%7By%7Dp%28y%29%20%5Cleft%20%5B%20%5Csum_%7Bx%7Dp%28x%7Cy%29%20%5Cln%20p%28x%7Cy%29%20%5Cright%20%5D%20-%5Csum_%7Bx%7Dp%28x%29%20%5Cln%20p%28x%29%20%5C%5C%20%26%20%3D%20%5Csum_%7By%7Dp%28y%29%20%5Cleft%20%5B%20%5Csum_%7Bx%7D%5Cfrac%7Bp%28x%2Cy%29%7D%7Bp%28y%29%7D%20%5Cln%20%5Cfrac%7Bp%28x%2Cy%29%7D%7Bp%28y%29%7D%20%5Cright%20%5D%20-%5Csum_%7Bx%7D%5Csum_%7By%7Dp%28x%2Cy%29%20%5Cln%20p%28x%29%20%5C%5C%20%5Cend%7Balign*%7D)

![equation](https://latex.codecogs.com/gif.latex?%5Cdpi%7B100%7D%20%5Cbegin%7Balign*%7D%20%26%20%28Because%20%5C%3B%20p%28x%7Cy%29%20%3D%20%5Cfrac%7Bp%28x%2Cy%29%7D%7Bp%28y%29%7D%20%5C%3B%20and%20%5C%3B%20p%28x%29%20%3D%20%5Csum_%7By%7Dp%28x%2Cy%29%29%20%5C%5C%20%5Ccolor%7Bwhite%7D%7BI%28X%2CY%29%7D%20%26%20%3D%20%5Csum_%7Bx%7D%5Csum_%7By%7D%5Cfrac%7Bp%28y%29p%28x%2Cy%29%7D%7Bp%28y%29%7D%20%5Cln%20%5Cfrac%7Bp%28x%2Cy%29%7D%7Bp%28y%29%7D%20-%5Csum_%7Bx%7D%5Csum_%7By%7Dp%28x%2Cy%29%20%5Cln%20p%28x%29%20%5C%5C%20%26%20%3D%20%5Csum_%7Bx%7D%5Csum_%7By%7Dp%28x%2Cy%29%20%5Cln%20%5Cfrac%7Bp%28x%2Cy%29%7D%7Bp%28y%29%7D%20-%5Csum_%7Bx%7D%5Csum_%7By%7Dp%28x%2Cy%29%20%5Cln%20p%28x%29%20%5C%5C%20%26%20%3D%20%5Csum_%7Bx%7D%5Csum_%7By%7Dp%28x%2Cy%29%5Cleft%20%5B%20%5Cln%20%5Cleft%20%28%20%5Cfrac%7Bp%28x%2Cy%29%7D%7Bp%28y%29%7D%20%5Cright%20%29%20-%20%5Cln%20p%28x%29%20%5Cright%20%5D%20%5C%5C%20%26%20%3D%20%5Csum_%7Bx%7D%5Csum_%7By%7Dp%28x%2Cy%29%20%5Cln%20%5Cleft%20%28%20%5Cfrac%7Bp%28x%2Cy%29%7D%7Bp%28x%29p%28y%29%7D%20%5Cright%20%29%20%5Cend%7Balign*%7D)

So yes, they are equal except for the difference in the base of the log. For your information, the log base can be 2, 10, or e, which depends on what information units an information system needs.

And with a theorem H(X|Y) = H(X, Y) - H(Y) of conditional entropy (if X and Y are discrete random variables), the mutual information formula can also be written as:

![equation](https://latex.codecogs.com/gif.latex?I%28X%2CY%29%20%3D%20H%28X%29%20&plus;%20H%28Y%29%20-%20H%28X%2CY%29)

To be more clearly about the above formula, let’s consider 2 cases:

* **Ideal channel:** for any given i, x_i = y_i. All the things sent by the sender are received by the receiver. And we can prove that (more details in \[2]):

![equation](https://latex.codecogs.com/gif.latex?%5Cbegin%7Balign*%7D%20H%28X%2CY%29%20%26%20%3D%20H%28X%29%20%3D%20H%28Y%29%20%5C%5C%20%5CRightarrow%20I%28X%2CY%29%20%26%20%3D%20H%28X%29%20&plus;%20H%28Y%29%20-%20H%28Y%29%20%5C%5C%20%5CRightarrow%20I%28X%2CY%29%20%26%20%3D%20H%28X%29%20%3D%20H%28Y%29%20%5Cend%7Balign*%7D)

* **Fully disturbed channel:** the output is totally not affected by the input, which means p(y_j | x_i) = p(y_j) => p(x_i, y_j) = p(x_i).p(y_j). We can prove that (more details in \[2]):

![equation](https://latex.codecogs.com/gif.latex?%5Cbegin%7Balign*%7D%20H%28X%2CY%29%20%26%20%3D%20H%28X%29%20&plus;%20H%28Y%29%20%5C%5C%20%5CRightarrow%20I%28X%2CY%29%20%26%20%3D%20H%28X%29%20&plus;%20H%28Y%29%20-%20H%28X%29%20-%20H%28Y%29%20%5C%5C%20%5CRightarrow%20I%28X%2CY%29%20%26%20%3D%200%20%5Cend%7Balign*%7D)

Finally, the mutual information can be defined as a measurement which quantifies the transmitted information in the channel.

From the two cases, we can infer that in the AMDIM model, the network tries to keep the two samples of the same class (despite being from different viewpoints) as close as possible. From a different view, ‘close’ here means there is an “invisible” channel from one sample to another sample and this channel is ideal so that the mutual information of two samples are maximized. Then meaningful features/representations can be learned, especially those that can deal with the challenge of varying viewpoints (location, color, light, scale variation due to augmentation).

### Maximization of mutual information

In \[2], the problem is formulated as follows: 
“the central principle for an information-theoretical optimization in feedforward structure says: for a given x<sub>i</sub>, y<sub>j</sub> and a given input distribution p(x<sub>i</sub>), determine the matrix P(y<sub>j</sub> | x<sub>i</sub>) in such a way that the mutual information becomes maximized”

\=> Therefore, in the case of DeepInfoMax, P(y<sub>j</sub> | x<sub>i</sub>) represents the parameters/weights of a neural network.
Reformulation of the expression for the mutual information \[2]:

For discrete variables:

![equation](https://latex.codecogs.com/gif.latex?I%28X%2CY%29%20%3D%20%5Csum_%7Bx%7Dp%28x%29%5Csum_%7By%7DP%28y%7Cx%29%20%5Cln%20%5Cfrac%7BP%28y%7Cx%29%7D%7B%5Csum_%7Bz%7DP%28y%7Cz%29p%28z%29%7D)

For continuous variables:

![equation](https://latex.codecogs.com/gif.latex?I%28X%2CY%29%20%3D%20%5Cint_%7B-%5Cinfty%7D%5E%7B&plus;%5Cinfty%7D%20dXp%28X%29%20%5Cint_%7B-%5Cinfty%7D%5E%7B&plus;%5Cinfty%7D%20dYP%28Y%7CX%29%20%5Cln%20%5Cfrac%7BP%28Y%7CX%29%7D%7B%5Cint_%7B-%5Cinfty%7D%5E%7B&plus;%5Cinfty%7D%20d%5Ctilde%7BX%7D%20P%28Y%7C%5Ctilde%7BX%7D%29%20p%28%5Ctilde%7BX%7D%29%7D)

### Properties

Mutual information is closely related to the Kullback-Leibler divergence - a measure of how different one distribution is from another distribution (“distance” between two distributions).

The equation of Kullback-Leibler divergence of two distributions P(z) and Q(z):

![equation](https://latex.codecogs.com/gif.latex?D_%7BKL%7D%28P%28z%29%7C%7CQ%28z%29%29%20%5Cequiv%20%5Csum_%7Bz%7DP%28z%29%20%5Clog%20%5Cleft%20%5B%20%5Cfrac%7BP%28z%29%7D%7BQ%28z%29%7D%20%5Cright%20%5D)

The mutual information is actually the Kullback-Leibler distance between the joint distribution of X and Y, and the product of the marginal probabilities:

![equation](https://latex.codecogs.com/gif.latex?I%28X%2CY%29%20%3D%20D_%7BKL%7D%28P_%7BXY%7D%28x%2Cy%29%7C%7CP_%7BX%7D%28x%29P_%7BY%7D%28y%29%29)

The symmetric property in mutual information:

![equation](https://latex.codecogs.com/gif.latex?I%28X%2CY%29%20%3D%20I%28Y%2CX%29)

The additive property for independent variables in mutual information. If ![equation](https://latex.codecogs.com/gif.latex?P_%7BXYWZ%7D%28x%2Cy%2Cw%2Cz%29%20%3D%20P_%7BXY%7D%28x%2Cy%29P_%7BWZ%7D%28w%2Cz%29), then:

![equation](https://latex.codecogs.com/gif.latex?I%28X%2CY%2CW%2CZ%29%20%3D%20I%28X%2CY%29%20&plus;%20I%28W%2CZ%29)

## The InfoMax principle \[7, 8]

This principle is for optimization in information processing systems and also artificial neural networks. Its main point can be described by this sentence: a function that receives a collection of inputs I to produce a collection of outputs O needs to be chosen so that the mutual information between I and O is maximized \[7].

In terms of a perceptual network with local feedforward connections \[7] (see Figure 2, which is very similar to the neural network nowadays), we can point out some knowledge to understand more clearly about the Infomax principle. This paper of Linsker is actually the research work from which the InfoMax principle derives.

![](../../static/images/uploads/self_adaptive_network.jpg)

<p align=center>
    <em><b>Figure 2:</b> A layered self-adaptive network with local feedforward connections (Image from \[7]).</em>
</p>

 In particular, there are some things that the InfoMax principle quantitatively implies about this perceptual network. Below is a table in which the first column holds some pieces of information about the InfoMax principle we notice in the paper \[7] and the second column is our comment:

<table id="tabletype1">
<tr>
    <th id="colTitle1" width="50%">From the paper \\[7]</th>
    <th id="colTitle2" width="50%">Our comment (if have)</th>
</tr>
<tr>
    <td>“Maximize the amount of information preserved from one layer to the next.”</td>
    <td>None</td>
</tr>
<tr>
    <td>“attempt to (1) maximize the total information conveyed by the output message M, and (2) minimize the information that M conveys to one who already knows the input message L.”</td>
    <td>It is possible that the output message should contain as much information as possible (1) along with the condition that this output also does not share too much human information in accordance with the input (2).

\=> to extract the most essential (and also relevant) part of the information for the balance of compactness and quality.

</td>
</tr>
<tr>
    <td>“These criteria are related, but not equivalent, to the property of encoding signals so as to reduce redundancies present among the inputs to the perceptual system.”</td>
    <td>The two criteria above do not only serve for solving the problem of reducing redundancies in the input.</td>
</tr>
<tr>
    <td>“A high noise level favors redundancy.”</td>
    <td>Redundancy means there is a high noise level.</td>
</tr>
<tr>
    <td>“Much of this work has focused on the role of redundancy reduction. This property is one, but only one, aspect of the infomax principle. For example, we have seen that infomax also leads to the introduction of redundancy when this is useful in countering the effects of noise.”</td>
    <td>In addition to redundancy reduction, the InfoMax principle also leads to other properties. They are listed below this table.</td>
</tr>
</table>

**Some properties** of the InfoMax principle in L-to-M (input-to-output) transformations (from \[7]):

* “**near-neighbors** in L tend to map to **near-neighbors** in M.”
* “a greater number of M cells tend to represent the types of layer-L excitation **patterns that occur more often**.”
* “The infomax principle selects which features of the input signals are represented in layer M. **Features having relatively high signal-to-noise ratios** are favored.”
* “When time-delayed information is made available to the layer, the infomax principle can cause M cells to **extract and encode temporal correlations**, in a manner similar to the extraction of spatial correlations.”

## DeepInfoMax \[9, 10]

### The main idea

DeepInfoMax is a self-supervised learning method with the aim of learning from unlabeled data and being more independent with manually annotated data.

Its process operates in a similar vein with the InfoMax principle: it learns to create good high-level representations by trying to maximize the mutual information between the input and output of an encoding architecture, while the InfoMax principle for the self-adaptive perceptual network above maximizes the mutual information between outputs of different layers of neural architecture.

By doing this, it hopes the model can learn the way of how to extract representations that still keep the most relevant and important cues from the original input.

We can also see this objective of maximizing mutual information as a pretext task in self-supervised learning. Through this pretext task, the authors hope the neural architecture can extract features/representations of good quality.

## Augmented Multiscale DeepInfoMax \[11]

The last one - Amdim is developed based on the DeepInfoMax with some modifications and improvements.

### Inheritance from DeepInfoMax

Amdim is a self-supervised learning model based on local Deep InfoMax (DIM). “Local DIM maximizes mutual information between a global summary feature vector, which depends on the full input, and a collection of local feature vectors pulled from an intermediate layer (or from different patches of the input image?) in the encoder.” 

### What are its differences with DeepInfoMax

It carries out the mutual information maximization between features from multiple views of a context object, not between the input and output of an encoding architecture.
Multiple views of a local spatial-temporal context can be obtained by looking from different locations (putting cameras at different positions) and gathering information from different modalities. Data-augmented versions of an image can also be seen as multiple views of an image.
To maximize this type of mutual information, it is required that a model has the ability to acquire information of high-level factors that coexist in every single view of a specified context (for example: “presence of certain objects or occurrence of certain events”). 

### The improvements

The Amdim model produces 3 improvements to local DIM:

* Features are predicted over independently augmented versions of each input.
* Simultaneously, features are also predicted over multiple scales of each input.
* It uses a more powerful encoder.

## Conclusion

Here we have shown some knowledge of entropy, mutual information, InfoMax principle, DeepInfoMax, Amdim and try to connect pieces of information so that you can acquire their relations in the most simple way we can. About DeepInfoMax and Amdim, we just provide the ideas. The details of them may be exposed in our next posts.

## References

\[1] Erik G. Learned-Miller, [Entropy and Mutual information](https://people.cs.umass.edu/~elm/Teaching/Docs/mutInf.pdf), University of Massachusetts, Amherst - Department of Computer Science, 2013

\[2] Jens Christian Claussen, [The Infomax principle: Maximization of Mutual Information](http://webmail.inb.uni-luebeck.de/~claussen/sysbio2012/infotheo.pdf), University of Lübeck, 2012

\[3] Peter E. Latham and Yasser Roudi, [Mutual information](http://www.scholarpedia.org/article/Mutual_information), Scholarpedia, 2009

\[4] Frank Keller, [Formal Modeling in Cognitive Science](http://www.inf.ed.ac.uk/teaching/courses/fmcs1/slides/lecture25.pdf), University of Edinburgh - School of Informatics, 2006

\[5] Iftach Haitner, [Joint & Conditional Entropy, Mutual Information](http://www.cs.tau.ac.il/~iftachh/Courses/Info/Fall14/Printouts/Lesson2_h.pdf), Tel Aviv University, 2014

\[6] [What does maximizing mutual information do?](https://stats.stackexchange.com/questions/480918/what-does-maximizing-mutual-information-do), StackExchange

\[7] Ralph Linsker, Self-Organization in a Perceptual Network, IBM Research, 1988

\[8] [InfoMax](https://en.wikipedia.org/wiki/Infomax), Wikipedia

\[9] Devon Hjelm, Philip Bachman, Adam Trischler, [Deep InfoMax: Learning good representations through mutual information maximization](https://www.microsoft.com/en-us/research/blog/deep-infomax-learning-good-representations-through-mutual-information-maximization/), Microsoft Research Blog, 2019

\[10] R Devon Hjelm et al., [Learning deep representations by mutual information estimation and maximization](https://arxiv.org/pdf/1808.06670.pdf?source=post_page---------------------------), ICLR, 2019

\[11] Philip Bachman et al., [Learning Representations by Maximizing Mutual Information Across Views](https://arxiv.org/pdf/1906.00910.pdf), arXiv, 2019