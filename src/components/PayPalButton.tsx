interface PayPalButtonProps {
  hostedButtonId: string;
}

export default function PayPalButton({ hostedButtonId }: PayPalButtonProps) {
  return (
    <div className="flex w-full justify-center rounded-lg p-4">
      <style jsx>{`
        .pp-${hostedButtonId} {
          text-align: center;
          border: none;
          border-radius: 0.25rem;
          min-width: 11.625rem;
          padding: 0 2rem;
          height: 2.625rem;
          font-weight: bold;
          background-color: #000000;
          color: #ffffff;
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1rem;
          line-height: 1.25rem;
          cursor: pointer;
        }
        .pp-${hostedButtonId}:hover {
          background-color: #333333;
        }
      `}</style>
      <form
        action={`https://www.paypal.com/ncp/payment/${hostedButtonId}`}
        method="post"
        target="_blank"
        style={{
          display: "grid",
          justifyItems: "center",
          alignContent: "start",
          gap: "0.5rem",
        }}
      >
        <input
          className={`pp-${hostedButtonId}`}
          type="submit"
          value="Buy Now"
        />
        {/* <img
          src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
          alt="Accepted payment methods"
          style={{ height: "1.5rem" }}
        />
        <section style={{ fontSize: "0.75rem" }}>
          Powered by{" "}
          <img
            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
            alt="PayPal"
            style={{ height: "0.875rem", verticalAlign: "middle" }}
          />
        </section> */}
      </form>
    </div>
  );
}
