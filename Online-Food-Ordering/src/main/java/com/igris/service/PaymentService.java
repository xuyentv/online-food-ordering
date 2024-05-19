package com.igris.service;

import com.igris.model.Order;
import com.igris.response.PaymentResponse;
import com.stripe.exception.StripeException;

public interface PaymentService{
    public PaymentResponse createPaymentLink(Order order) throws StripeException;
}
