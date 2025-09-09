import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Get the Formcarry endpoint from environment variables
const formCarryEndpoint = process.env.FORMCARRY_ENDPOINT;

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate the request data
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    // Validate that the Formcarry endpoint is configured
    if (!formCarryEndpoint) {
      console.error('FORMCARRY_ENDPOINT environment variable is not set');
      return NextResponse.json(
        { success: false, error: 'Form submission service is not configured' },
        { status: 500 }
      );
    }

    // Forward the submission to Formcarry
    const formCarryResponse = await axios.post(
      formCarryEndpoint,
      { name, email, message },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    // Check if the formCarry response indicates success
    if (formCarryResponse.data?.status === 'success') {
      return NextResponse.json(
        {
          success: true,
          message: 'Form submission received successfully',
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          error: 'Form submission service returned an error',
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    // Handle Axios errors specifically
    if (axios.isAxiosError(error)) {
      console.error('Formcarry API error:', error.message);

      // Extract specific error message if available
      const errorMessage =
        error.response?.data?.message || 'Form submission service error';

      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 500 }
      );
    }

    // Handle all other errors
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
